var secret = undefined;

var test = () => {
    if (1 === 1) return "one";
}

export function initsecret(callback) {
    if (process.env.NODE_ENV === 'development') {
        console.log("env var was dev");
        import('./credentials/secret.js').then((devsecrets) => {
            secret = devsecrets.devsecret;
            console.log("secret set to dev", secret);
            console.log("is this firing before secret set to dev??");
            if (callback) { console.log("callback should happen now:"); callback(); }
        });
    }
    else if (process.env.NODE_ENV === 'production') {
        secret = process.env.REACT_APP_KEY;
        console.log("secret set to prod", secret);
        console.log("is this firing before secret set to dev??");
        if (callback) { console.log("callback should happen now:"); callback(); }
    }
}

export function secretprint() {
    console.log("attempting to print secret", secret);
    console.log("also test is", test());
}