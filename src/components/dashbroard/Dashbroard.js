import React, { useEffect, useState } from "react";
import moment from "moment";

import clock from "../../assets/imgs/clock.svg";
import avatar from "../../assets/imgs/avatar.svg";
import { Link } from "react-router-dom";

import "./Dashbroard.scss";

import { PlusCircleOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";

import { getTasks } from "../../service/Task";

export default function Dashbroard() {
  useEffect(() => {
    getDataTaskList();
  }, []);
  const [listTask, setListTask] = useState();
  const getDataTaskList = async () => {
    const dataTask = await getTasks();
    setListTask(dataTask);
  };

  const formatTime = (date) => {
    return moment(date).format("h a");
  };

  return (
    <div className="dashbroard">
      <div className="dashbroard-info">
        <div className="dashbroard-avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="dashbroard-name">
          <p>Monica Gamage</p>
          <span>@monicagamage</span>
        </div>
        <Link to="/login">
          <button>Log Out</button>
        </Link>
      </div>
      <div className="dashbroard-content">
        <div className="dashbroard-content-clock">
          <img src={clock} alt="" />
          <p>Good Afternoon</p>
        </div>
        <div className="dashbroard-content-task">
          <h2 className="dashbroard-content-task-title">Tasks List</h2>
          <div className="dashbroard-content-task-box">
            <div className="dashbroard-content-task-box-header">
              <div className="dashbroard-content-task-box-header-title">
                <p>Tasks List</p>
              </div>
              <div className="dashbroard-content-task-box-header-btn">
                <button>
                  <PlusCircleOutlined />
                </button>
              </div>
            </div>
            <div className="dashbroard-content-task-box-content">
              {listTask?.map((task) => {
                return (
                  <div className="" key={task.id}>
                    <Checkbox checked={task.completed}>
                      {task.name} at {formatTime(task.createdAt)}
                    </Checkbox>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
