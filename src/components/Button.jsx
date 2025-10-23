


const ButtonPrimary = ({
    href,
    target = "_self",
    label,
    icon,
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"ButtonPrimary"}
            >
                {label}
                {icon ?
                    <span className="Button-icon">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        );
    } else {
        return (
            <button className={"ButtonPrimary"}>
                {label}
                {icon ?
                    <span className="Button-icon">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        );
    }
}

const ButtonOutline = ({
    href,
    target = "_self",
    label,
    icon,
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"ButtonOutline"}
            >
                {label}
                {icon ?
                    <span className="Button-icon">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        );
    } else {
        return (
            <button className={"ButtonOutline"}>
                {label}
                {icon ?
                    <span className="Button-icon">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        );
    }
}

export {ButtonPrimary,
        ButtonOutline
}