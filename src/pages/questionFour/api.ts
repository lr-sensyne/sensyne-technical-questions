/**
 * Mock API call
 *
 * Assuming worst case scenario for invalid input i.e. lengthy response time
 */
export function isPhoneNumberValid(phoneNumber: string): Promise<boolean> {
    const isValid = /^\d+$/.test(phoneNumber) && phoneNumber.length === 10;

    if (phoneNumber.length < 10) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(isValid);
            }, 500);
        });
    }

    return Promise.resolve(isValid);
}
