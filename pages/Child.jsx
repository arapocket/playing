import { useEffect, useRef, memo } from "react"
import { useTime } from "./useTime";

export const Child = memo(() => {

    const childRenderRef =  useRef(0);

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

    useEffect(()=> {
        console.log("child rendered");

        return () => {
            console.log("child unmounted");
        }
    }, [])


    return (
        <div style={styles.container}>
            <div className ="text-box">Child Renders: {childRenderRef.current++}</div>
            <div className ="text-box">{time.toString()}</div>
        </div>
    )
    
});