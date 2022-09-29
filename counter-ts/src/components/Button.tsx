type propsType = {
    name: string
    disabled: boolean;
    onClick: () => void
}

export const Buttons = (props: propsType) => {
    return (
        <>
            <button
                disabled={props.disabled}
                onClick={() => props.onClick()}
            >
                {props.name}

            </button>
        </>
    );
}