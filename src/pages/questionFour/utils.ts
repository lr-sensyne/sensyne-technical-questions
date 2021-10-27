const CANCEL = Symbol();

export class CancellationToken {
    cancelled: boolean;

    constructor() {
        this.cancelled = false;
    }

    throwIfCancelled() {
        if (this.isCancelled()) {
            throw 'Cancelled!';
        }
    }

    isCancelled() {
        return this.cancelled === true;
    }

    [CANCEL]() {
        this.cancelled = true;
    }
}

export default class CancellationTokenSource {
    token: CancellationToken;

    constructor() {
        this.token = new CancellationToken();
    }

    cancel() {
        this.token[CANCEL]();
    }
}
