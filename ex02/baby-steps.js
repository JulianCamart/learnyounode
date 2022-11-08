console.log(process.argv.slice(2).reduce((pv, cv) => parseInt(pv) + parseInt(cv), 0))
