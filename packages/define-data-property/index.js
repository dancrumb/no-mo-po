module.exports =  (object, propertyName, propertyValue, nonEnumerable, nonWritable, nonConfigurable) => {
    Object.defineProperty(object, propertyName, {
        value: propertyValue,
        enumerable: !nonEnumerable,
        writable: !nonWritable,
        configurable: !nonConfigurable
    });
}