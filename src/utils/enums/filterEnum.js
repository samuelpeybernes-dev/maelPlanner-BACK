/**
 ** Constante à utiliser pour les filtres des requêtes
 */
const filters = {
  OPPORTUNITY_CLOUD_DEV: ['CLOUD IAAS', 'CLOUD SAAS', 'UNIFIED COMMUNICATION'],
  OPPORTUNITY_HORS_VAR: [
    '-- INTERNAL SKUS --',
    'NETWORK',
    'OTHER',
    'SOFTWARE',
    'STORAGE',
    'WORKSTATION',
    '(vide)',
    'ACCESSORIES',
    'DISPLAY',
    'PRINTING',
    'MOBILITY',
    'SERVICES',
    'DESKTOPS',
    'SERVERS',
    'UNIFIED COMMUNICATION',
    'AUDIO&VIDEO',
    'IOT',
    'COMPONENTS',
    'DONOTSELL',
    null,
  ],
  OPPORTUNITY_VAR_ACQ: [
    '-- INTERNAL SKUS --',
    'NETWORK',
    'OTHER',
    'SOFTWARE',
    'STORAGE',
    'WORKSTATION',
    'ACCESSORIES',
    'DISPLAY',
    'PRINTING',
    'MOBILITY',
    'SERVICES',
    'DESKTOPS',
    'SERVERS',
    'UNIFIED COMMUNICATION',
    'AUDIO&VIDEO',
    'IOT',
    'COMPONENTS',
    'DONOTSELL',
    null,
  ],
  // LOB : line of business
  // LOB n'a pas vraiment de sens pour le filtrage...
  OPPORTUNITY_VAR_DEV: [
    '-- INTERNAL SKUS --',
    'NETWORK',
    'OTHER',
    'SOFTWARE',
    'STORAGE',
    'WORKSTATION',
    'ACCESSORIES',
    'DISPLAY',
    'PRINTING',
    'MOBILITY',
    'SERVICES',
    'DESKTOPS',
    'SERVERS',
    'AUDIO&VIDEO',
    'IOT',
    'COMPONENTS',
    'DONOTSELL',
    null,
  ],
  OPPORTUNITY_PRESENTATION_XEFI_ACQ: [
    '-- INTERNAL SKUS --',
    'NETWORK',
    'OTHER',
    'SOFTWARE',
    'STORAGE',
    'WORKSTATION',
    'ACCESSORIES',
    'DISPLAY',
    'PRINTING',
    'MOBILITY',
    'SERVICES',
    'DESKTOPS',
    'SERVERS',
    'AUDIO&VIDEO',
    'IOT',
    'COMPONENTS',
    'DONOTSELL',
    null,
  ],
  SEGMENTATION_VAR_ACQ: ['BSDR-VAR', 'BSDT-VAR', 'BSDR-R'],
  SEGMENTATION_VAR_DEV: ['BSDR-VAR', 'BSDT-VAR'],
  SEGMENTATION_HORS_VAR_ACQ: ['--', 'AO', 'BLO', 'BSDR', 'BSDR-PUB', 'BSDR-A', 'BSDR-R', 'BSDT', 'BSDT-PUB', 'PREMIUM', 'UNKNOWN', null],
  SEGMENTATION_HORS_VAR_DEV: ['--', 'AO', 'BLO', 'BSDR', 'BSDT', 'BSDT-PUB', 'PREMIUM', 'UNKNOWN', null],
  SEGMENTATION_PRESENTATION_XEFI_ACQ: [
    '--',
    'AO',
    'BLO',
    'BSDR',
    'BSDR-A',
    'BSDR-PUB',
    'BSDR-R',
    'BSDR-VAR',
    'BSDT',
    'BSDT-PUB',
    'BSDT-VAR',
    'PREMIUM',
    'UNKNOWN',
    '(vide)',
    'PREMIUM-VAR',
    null,
  ],
  LEAD_SOURCE_LEAD_DEV: ['LEAD COMPUFIRST', 'LEAD PROSPECT'],
  OPPORTUNITY_NAME_PRESENTATION_XEFI: ['Présentation XEFI%'],

  /**
   * Pour l'instant 2nd chance et activation sont partout mais a terme on fera un onglet à part
   * OPPORTUNITY_NAME_DEV: ['2NDCHANCE', 'Activation%', 'Lead%'],
   */
  OPPORTUNITY_NAME_ACTIVATION: ['Activation%', '2ndchance%'],
  OPPORTUNITY_NAME_NOTLIKE: ['Présentation XEFI%', 'Lead%', 'DWEB%', 'Activation%', '2ndchance%'],
  OPPORTUNITY_NAME_LEAD: ['Lead%'],
}

export default filters
