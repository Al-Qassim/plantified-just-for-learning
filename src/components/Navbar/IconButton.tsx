export type IconButtonProps = {
    name: string;
    iconAsset: string;
    hasRedDot: boolean;
}

export function IconButtons({ iconButtons }: { iconButtons: IconButtonProps[] }) {
    return (
        <div className="icon-buttons">
            {iconButtons.map((iconButton) => (
                <IconButton key={iconButton.name} iconButton={iconButton} />
            ))}
        </div>
    )
}

function IconButton({ iconButton }: { iconButton: IconButtonProps }) {
    return (
        <button className="icon-button-container" type="button">
            <img className="icon-button" src={iconButton.iconAsset} alt={iconButton.name} />
            {iconButton.hasRedDot && <div className="red-dot"></div>}
        </button>
    )
}