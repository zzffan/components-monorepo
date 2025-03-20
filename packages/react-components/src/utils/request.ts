import ky, {type KyInstance} from 'ky';

export const compApiClient: KyInstance = ky.extend({
    timeout: 30 * 1000
});
