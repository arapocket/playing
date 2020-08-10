import { useEffect, useRef, memo } from "react"

export const Child = memo(() => {

    const childRenderRef =  useRef(0);

    const styles = {
        container: {
            backgroundColor: "#FFF787",
            padding: "10px",
            display: "flex",
            flex: 1,
            border: "solid 10px",
            alignItems: "center",
            justifyContent: "center"

        },
        textBox: {
            width: "100px",
            height: "100px",
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
            <div className ="text-box">Renders: {childRenderRef.current++}</div>
        </div>
    )
    
});