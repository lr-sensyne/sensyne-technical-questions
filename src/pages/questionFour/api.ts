import { CancellationToken } from './utils';
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

/**
 * Mock API call
 *
 * Assuming worst case scenario for invalid input i.e. lengthy response time
 */
export function isPhoneNumberValid(
    phoneNumber: string,
    cancelToken: CancellationToken,
): Promise<boolean> {
    const isValid = phoneUtil.isValidNumber(phoneUtil.parse(phoneNumber, 'UK'));

    if (phoneNumber.length < 10) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                if (cancelToken.isCancelled()) {
                    clearTimeout(timeout);
                    return reject('Cancelled');
                }

                resolve(isValid);
            }, 500);
        });
    }

    return Promise.resolve(isValid);
}
