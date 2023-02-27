interface IHeaderProps {
    name: string;
}

const Header: React.FC<IHeaderProps> = ({name}: IHeaderProps) => {
    return (
        <h1 className="text-center text-2xl font-bold text-black">
            {name}
        </h1>
    )
}

export default Header;