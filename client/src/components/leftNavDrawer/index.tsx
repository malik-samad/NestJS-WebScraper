import "./style.css"

type NavElement = {
    label: string;
    href: string;
    Icon: React.ComponentType;
}

type Props = {
    elements: NavElement[]
}

export default function LeftNavDrawer(props: Props) {

    return <div className="left-nav-wrapper">
        {
            props.elements.map(({ label, href, Icon }) => <a href={href} key={label} className="left-nav-element click-effect">
                {<Icon />}
                <span>{label}</span>
            </a>)
        }
    </div>
}