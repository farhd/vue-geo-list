import { withParams } from 'vuelidate/lib';

const geoValidator = withParams({ type: 'geoValidator' }, value => (
  // TODO: refine check
  // Latitude measurements range from 0° to (+/–)90°
  // Longitude measurements range from 0° to (+/–)180°
  !isNaN(Number(value))
));

export default geoValidator;
