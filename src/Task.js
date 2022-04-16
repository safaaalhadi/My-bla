import React from "react"
import Card from "@mui/material/Card";



export default function Task({title,buttonOne,buttonTwo,buttonThree,buttonFour}) {
    return(
        <>
            <div className="col-sm-1"></div>
            <div className="col-sm-3 " style={{maxWidth:'20rem'}}>
                <Card className="p-2 w-100 app">
                    <h6 className="hidden pt-2" >{title}</h6>
                    <div className="d-flex">
                        <div className="m-auto w-100">
                            {buttonOne}
                            {buttonTwo}
                            {buttonFour}
                            {buttonThree}
                        </div>
                    </div>
                </Card>
            </div>

        </>
    )
}
