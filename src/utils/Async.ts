export const asyncEffect = (asyncFn: Promise<any>) => { (async () => { await asyncFn })() }
