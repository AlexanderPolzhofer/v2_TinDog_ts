import CardWithHeader from './../card/CardWithHeader';

type TCardDetails = {
    header: string;
    title: string;
    text: string[];
    buttonType: string;
}

const CardDetails: TCardDetails[] = [
    {
        header: 'Chihuahua',
        title: 'free',
        text: [
            '5 Matches per day',
            '10 Messages per day',
            'ulimited App usage'
        ],
        buttonType: 'success'
    },
    {
        header: 'Labrador',
        title: '$29/mo',
        text: [
            'unlimited matches',
            'unlimited messages',
            'unlimited App usage'
        ],
        buttonType: 'dark'
    },
    {
        header: 'Mastiff',
        title: '$59/mo',
        text: [
            'priority listing',
            'unlimited messages',
            'unlimited messages',
            'unlimited App usage'
        ],
        buttonType: 'dark'
    }
]

const CardList = () => {
    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            {CardDetails.map(card => {
                const { header, title, text, buttonType } = card;

                return (<CardWithHeader
                    header={header}
                    title={title}
                    text={text}
                    buttonType={buttonType}
                    button='sign up'
                />)
            })}
        </div>
    )
}

export default CardList;