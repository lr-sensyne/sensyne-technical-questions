export class CancellationToken {
    cancelled: boolean;

    constructor() {
        this.cancelled = false;
    }

    isCancelled() {
        return this.cancelled === true;
    }

    cancel() {
        this.cancelled = true;
    }
}

export default class CancellationTokenSource {
    token: CancellationToken;

    constructor() {
        this.token = new CancellationToken();
    }

    cancel() {
        this.token.cancel();
    }
}
