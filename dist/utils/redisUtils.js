"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCacheByKey = exports.getOrSetCacheDate = exports.getOrSetCacheDateSmart = exports.getOrSetCache = void 0;
const date_fns_1 = require("date-fns");
const redis_1 = __importDefault(require("redis"));
const dotenv_1 = require("../config/dotenv");
const timeEnum_1 = __importDefault(require("./enums/timeEnum"));
const cacheKeyPrefix = dotenv_1.NODE_ENV === 'development' ? '_dev' : '';
/* On gère le serveur redis */
const client = redis_1.default.createClient({
    host: process.env.HOST_REDIS,
    port: 6379,
    retry_strategy: function (options) {
        // Limit the number of attempts to 10
        if (options.attempt > 0)
            console.warn("WARN : Redis can't connect, please connect REDIS, retrying in 15 seconds...");
        if (options.attempt > 5) {
            // Stop retrying and show the error message
            return new Error('Error: No connection to Redis server. please connect REDIS and restart the server.');
        }
        // Wait for 15 seconds before attempting to reconnect
        return 15 * 1000;
    },
});
/* On gère les différents messages en fonction de l'état du serveur */
client.on('ready', () => {
    console.log('Redis server connected and ready.');
    console.log('Cache enabled:', dotenv_1.ENABLE_CACHE);
});
client.on('reconnecting', () => {
    console.log('Redis is reconnecting...');
});
client.on('error', err => {
    console.error('Redis error:', err);
});
client.on('end', () => {
    console.log('Redis server connection closed.');
});
client.on('warning', warning => {
    console.warn('Redis warning:', warning);
});
/* Les méthodes utiles pour Redis */
/**
 ** Initialise ou récupère le cache d'une key.
 ** L'initialisation se fait via la fonction de callback.
 *
 * @param {String} key Valeur qui sert de clé pour accéder à la valeur
 * @param {Int} expirationTime Temps avant expiration de la donnée
 * @param {Function} callback Méthode utilisée si la key est absente du cache
 * @returns
 */
const getOrSetCache = (key, expirationTime, callback) => {
    if (!dotenv_1.ENABLE_CACHE)
        return callback();
    const newKey = getKeyAccordingToEnv(key);
    return new Promise((resolve, reject) => {
        client.get(newKey, async (redisError, data) => {
            if (redisError)
                return reject(redisError);
            if (data != null) {
                resolve(JSON.parse(data)); //* Si on a déjà la donnée en cache, on la renvoie
                console.log('Redis found data in cache | key : ' + newKey);
                return; // On fait plus rien
            }
            try {
                console.log("Redis can't find data in cache, fetching from DB... | key : " + newKey);
                const freshData = await callback(); //* Sinon on va chercher la donnée
                client.setex(newKey, expirationTime, JSON.stringify(freshData)); //* On enregistre la donnée en cache
                return resolve(freshData);
            }
            catch (error) {
                console.error(`Redis : fetching from database failed`);
                return reject(error);
            }
        });
    });
};
exports.getOrSetCache = getOrSetCache;
/**
 ** Initialise ou récupère le cache d'une key avec des temps de validité différents en fonction de la date de fin
 ** Le temps de validité sera égal à l'age de la requête si la date de fin est dans le passé
 ** L'idée est que plus la date de fin est lointaine dans le passé, plus le temps de validité est long.
 ** L'initialisation se fait via la fonction de callback.
 * @param {String} key Valeur qui sert de clé pour accéder à la valeur
 * @param {Function} callBack Méthode utilisée si la key est absente du cache
 * @param {Date} endDate Date de fin de la période de la requête
 * @param {Int} expirationTimeMin (falcutatif, 15 minutes par défaut) Le minimum de temps qu'on stocke en cache (pour les données récentes)
 * @param {Int} expirationTimeMax (falcutatif, 1 MOIS par défaut) Le maximum de temps qu'on stocke en cache (pour les données anciennes)
 * @returns
 */
const getOrSetCacheDateSmart = (key, callBack, endDate, expirationTimeMin = timeEnum_1.default.FIFTEEN_MINUTES, expirationTimeMax = timeEnum_1.default.ONE_MONTH) => {
    const minTimeInDays = Math.ceil(expirationTimeMin / timeEnum_1.default.ONE_DAY);
    const maxTimeInDays = Math.ceil(expirationTimeMax / timeEnum_1.default.ONE_DAY);
    if (endDate === null)
        return (0, exports.getOrSetCache)(key, expirationTimeMin, callBack);
    const now = new Date();
    /* On est dans le futur ou ajourd'hui, on enregistre le minimum */
    if ((0, date_fns_1.isAfter)(endDate, now) || (0, date_fns_1.isSameDay)(endDate, now))
        return (0, exports.getOrSetCache)(key, expirationTimeMin, callBack);
    /* On est dans le passé, on va calculer la durée en jour entre les deux dates */
    const requestAge = Math.abs((0, date_fns_1.differenceInDays)(now, endDate));
    /* On prend la valeur calculée que si elle dépasse pas la valeur max */
    let effectiveExpirationTime = Math.min(requestAge, maxTimeInDays);
    /* On prend la valeur calculée que si elle dépasse pas la valeur min  */
    effectiveExpirationTime = Math.max(effectiveExpirationTime, minTimeInDays);
    /* On convertit en secondes */
    effectiveExpirationTime = effectiveExpirationTime * timeEnum_1.default.ONE_DAY;
    return (0, exports.getOrSetCache)(key, effectiveExpirationTime, callBack);
};
exports.getOrSetCacheDateSmart = getOrSetCacheDateSmart;
/**
 ** Initialise ou récupère le cache d'une key avec des temps de validité différents en fonction de la date de fin
 ** Si on a une date de fin dans le passé, on aura un temps de validité plus long que si c'est une période en cours
 ** L'initialisation se fait via la fonction de callback.
 * @param {String} key Valeur qui sert de clé pour accéder à la valeur
 * @param {Function} callBack Méthode utilisée si la key est absente du cache
 * @param {Date} endDate Date de fin de la période de la requête
 * @param {Int} expirationTimeToday (falcutatif, 15 minutes par défaut) Temps avant expiration de la donnée pour une donnée qui peut être mise à jour
 * @param {Int} expirationTimePast (falcutatif, 2 semaines par défaut) Temps avant expiration de la donnée pour une donnée passée
 * @returns
 */
const getOrSetCacheDate = (key, callBack, endDate, expirationTimeToday = timeEnum_1.default.FIFTEEN_MINUTES, expirationTimePast = timeEnum_1.default.ONE_WEEK) => {
    const expirationTime = (0, date_fns_1.isAfter)(endDate, new Date()) ? expirationTimeToday : expirationTimePast;
    return (0, exports.getOrSetCache)(key, expirationTime, callBack);
};
exports.getOrSetCacheDate = getOrSetCacheDate;
/**
 ** On s'assure de ne pas avoir la même clé en DEV et en PROD
 * @param {*} key
 * @returns
 */
const getKeyAccordingToEnv = key => {
    return `${key}${cacheKeyPrefix}`;
};
/**
 ** Supprime du cache une paire key/value avec sa key
 * @param {String} key Valeur qui sert de clé pour accéder à la valeur
 * @returns
 */
const deleteCacheByKey = key => {
    const newKey = getKeyAccordingToEnv(key);
    return new Promise((resolve, reject) => {
        client.del(newKey, error => {
            if (error)
                return reject(error);
            return resolve(1);
        });
    });
};
exports.deleteCacheByKey = deleteCacheByKey;
//# sourceMappingURL=redisUtils.js.map