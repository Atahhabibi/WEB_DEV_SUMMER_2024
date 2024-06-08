 export const getElement = (selection, all = false) => {
    if (!selection) throw new Error("No selection provided");

    const element = all ? [...document.querySelectorAll(selection)] : document.querySelector(selection);

    if ((all && element.length === 0) || (!all && element === null)) {
        throw new Error(`No element matches the selection: ${selection}`);
    }

    return element;
};


