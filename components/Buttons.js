

const Buttons = () => {
    return (

        <div className='col'>
      
        <a className='btn' role="button" href="https://www.twitch.tv/obamaatemypollo" target='_blank'><img src='/img/Twitch.png'></img></a>

        <a className='btn' role="button" href="https://www.twitter.com/obamaatemypollo" target='_blank'><img src='/img/Twitter.png'></img></a>

        <style>{`

        .col {
           position: relative; 
           text-align: center;
            width: 100%;
            padding-right: 1px;
            padding-left: 1px;
            align-items: center;
        }

        .btn {
            display: inline-block;
            font-weight: 400;
            color: #212529;
            text-align: center;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
        }


        a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
        padding-left: 5px;
        align-items: center;
        text-align: center;
        margin: 1px;
        }
        `} </style>
        </div>
    )
}

export default Buttons
