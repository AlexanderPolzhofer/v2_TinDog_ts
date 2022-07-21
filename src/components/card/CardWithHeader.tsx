import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type TCardWithHeaderProps = {
    header: string;
    title: string;
    text: string[];
    buttonType: string;
    button: string;
}

const CardWithHeader: React.FC<TCardWithHeaderProps> = (
    {
        header,
        title,
        text,
        buttonType,
        button
    }
) => {
    return (
        <Card style={
            {
                textAlign: 'center',
                width: '444px',
                margin: '3% 3%'
            }
        }>
            <Card.Header><h2>{header}</h2></Card.Header>
            <Card.Body>
                <Card.Title><h4>{title}</h4></Card.Title>
                <Card.Text>
                    {text.map(text => <h6><p>{text}</p></h6>)}
                </Card.Text>
                <Button variant={buttonType}>{button}</Button>
            </Card.Body>
        </Card>
    );
}

export default CardWithHeader;