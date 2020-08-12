import { useEffect, useRef, memo } from "react"
import { useTime } from "./useTime";
import { useSelector } from 'react-redux'

export const Child = memo(({ parentVal }) => {

    const listOfNames = useSelector(state => state.names);
    console.log(listOfNames)
    const childRenderRef = useRef(0);

    const time = useTime();

    const styles = {
        container: {
            backgroundColor: "#FFF787",
            display: "flex",
            flex: 1,
            border: "solid 10px",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column"

        },
        textBox: {
            backgroundColor: "blue",
            color: "white",
            display: "flex",
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
        }
    }
    // functionFromParent()
    useEffect(() => {
        console.log("child rendered");
        console.log(parentVal)
        return () => {
            console.log("child unmounted");
        }
    }, [])


    return (
        <div style={styles.container}>

            <div className="text-box">Renders: {childRenderRef.current++}</div>
            <div className="text-box">Child Renders: {childRenderRef.current++}</div>
            <div className="text-box">{time.toString()}</div>
            <div className="text-box">Child Renders: {childRenderRef.current++}</div>
            <div className="text-box">{time.toString()}</div>
        </div>
    )

});