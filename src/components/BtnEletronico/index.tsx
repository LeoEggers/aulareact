import './style.css'

type Props = {
    name : string;
}

export default function BtnEletronico({name} : Props) {
    return (
        <div className="dsc-category">
            {name}
        </div>
    );
}