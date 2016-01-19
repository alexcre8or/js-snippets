try {
    undefined_global_variable = 10; // Reference Error
}
catch (e) {
    console.warn(e.name + ':' + e.type);
}