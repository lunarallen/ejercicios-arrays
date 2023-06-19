function sumarLista(...args) {
    let total = 0;
    const result = args.reduce( (total, args) => total += args);
    console.log(result);
}

sumarLista(1, 2, 3, 4, 5, 20);