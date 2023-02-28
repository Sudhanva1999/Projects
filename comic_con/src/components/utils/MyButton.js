import React from "react";
import { Button } from "@mui/material";
import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size={props.size ? props.size : "large"}
            style={{
                background: "green",
                color: "white",
                ...props.style
            }}
        >
            {props.iconTicket ?
                <img
                    src={TicketIcon}
                    className="iconImage"
                    alt="IconImage"
                />
                :
                null
            }
            {props.text}
        </Button>
    );
}

export default MyButton;

