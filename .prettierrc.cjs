module.exports = {
    tabWidth: 4,
    singleQuote: true,
    endOfLine: 'auto',
    trailingComma: 'none',
    printWidth: 200,
    overrides: [
        {
            files: ['*.rs', '*.tsx', '*.jsx', '*.js', '*.ts', '*.vue']
        },
        {
            files: ['*.yaml'],
            options: {
                tabWidth: 2
            }
        }
    ]
};
