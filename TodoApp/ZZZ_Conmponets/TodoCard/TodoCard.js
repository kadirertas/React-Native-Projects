import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import styles from './TodoCard.style';
import TodoData from './TodoDATA.json';

const TodoCard = (props) => {
    const [todoData, setTodoData] = useState(() => {
       
        return TodoData;
    });

  
    const [titleText, setTitleText] = useState("");

    console.log(props.card.title);

    const MissionCompleted = (taskId) => {
        const updatedTodoData = todoData.filter(task => task.id !== taskId);
        setTodoData(updatedTodoData);
    }


  

 
    return (
        <View style={styles.content}>

            {todoData.map(task => (
                <View key={task.id}>
                    <Text style={styles.ListData}>{props.card.title}</Text>
                    <Button
                        title="Görev Tamamlandı"
                        onPress={() => {
                            console.log("Butona tıklandı!");
                            MissionCompleted(task.id);
                        }}
                        color="#123456"
                        disabled={false}
                        testID={task.id}
                        style={{ margin: 10, color: 'red' }}
                    />
                </View>
            ))}
        </View>
    );
}

export default TodoCard;
