repasar estrategia general del dashboard

************

En un Component.js en el que paso algo como prop (o una variable que definí ahí mismo) y luego una función necesita esa prop, ¿se lo paso a la función como parámetro o que lo levante del scope?

alt 1a:
function NumberLiker({something}) {
    const stringFunction (param) => `i like number ${param * 2}`;
    return <>{stringFunction(something)}</>;
}
alt 1b:
function NumberLiker() {
    const something = 8;
    return <>{stringFunction(something)}</>;
}
    var stringFunction(param) => `i like number ${param * 2}`;

alt 2:
export function NumberLiker({something}) {
    //const something = 8;
    const stringFunction () => `i like number ${something * 2}`;
    return <>{stringFunction()}</>;
}

************

ver en 'src/components/charts/Charts.js' armar chartTypes con Object.keys(Doughnut))

************


************


************


************

