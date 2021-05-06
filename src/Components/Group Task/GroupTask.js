import React from 'react';
// import './grouptask.css'


// function GroupTask(){
//     return (
//         <div className="group-task">
//             <div className="group-title-box">
//                 <p className="group-title-text">Group Task 1</p>
//             </div>
//             <div className="month">January - March</div>
//         </div>
//     )
// }
// export default GroupTask;

export default function GroupTask({
    width,
    height,
    backgroundColor,
    border,
    TBbackgroundColor,
    TBborderColor,
    titleTextColor
}) {
    const styles = ({
        groupTask: {
            width: width || 277,
            height: height || 184,
            borderRadius: 4,
            backgroundColor: backgroundColor || "#FFF9FB",
            border: `${border} solid 1px` || "#EB2F96 solid 1px",
            padding: 12,
            marginTop: 24,
            marginRight: 16,
        },
        groupTitleBox: {
            width: 86,
            height: 22,
            backgroundColor: TBbackgroundColor || "#FFF0F6",
            border: `${TBborderColor} solid 1px` || "#FFADD2 solid 1px",
            borderRadius: 2,
            marginBottom: 5,
        },
        groupTitleText: {
            fontFamily: 'Rubik',
            fontSize: 12,
            lineHeight: 2,
            // letterSpacing: 0,
            textAlign: "center",
            margin: 0,
            color: titleTextColor || "#EB2F96",
        },
        month: {
            fontFamily: 'Rubik',
            fontSize: 12,
            // fontStyle: "normal", 
            fontWeight: 500,
            // lineHeight: 20,
            // letterSpacing: 0,
            textAlign: "left",
            marginTop: 5,
        }
    });
    return (
        <div style={styles.groupTask}>
            <div style={styles.groupTitleBox}>
                <p style={styles.groupTitleText}>Group Task 1</p>
            </div>
            <div style={styles.month}>January - March</div>
        </div>
    )
};

// const GroupTask = ({ groupTask }) => {
// }

