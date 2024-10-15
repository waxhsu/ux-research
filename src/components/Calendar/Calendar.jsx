import React, { useState } from "react";
import './Calendar.css';
import { HARDCORE_DETAILS } from './CalendarData'
import playButton1 from './playButton1.png'
import playButton2 from './playButton2.png'

export default function Calendar() {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleDetails = (index) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className='calendar'>
          {HARDCORE_DETAILS.map((classInfo, index) => {
              return (
                <div className='container-cc flex' key={index}>
                    <div id='scheduleCard'>
                        <div id='WeekNUM'>
                            <div className='weekInfo'>Week {classInfo.weekNum} of 4</div>
                            {/* Odd Numbered Topic */}
                            <div id='oddTopicNumber' className='headerTitle' onClick={() => toggleDetails(index)}>
                                <img 
                                    src={playButton1} 
                                    className={`scheduleIconImg ${expandedSections[index] ? 'rotated' : ''}`} 
                                    alt='playButton1' 
                                />
                                <div className='classTitle'>{classInfo.topicTitle1} ·&nbsp;</div>
                                <div className='clickDetails'>Click for Details</div>
                            </div>
                            {expandedSections[index] && (
                                <>
                                    <div className='topicDetails'>
                                        <ul>{classInfo.topicDetails1_1}</ul>
                                        <ul>{classInfo.topicDetails1_2}</ul>
                                        <ul>{classInfo.topicDetails1_3}</ul>
                                        <li>{classInfo.topicDetails1_bullet1}</li>
                                        <li>{classInfo.topicDetails1_bullet2}</li>
                                        <li>{classInfo.topicDetails1_bullet3}</li>
                                    </div>
                                </>
                            )}
                            <div id='optionalTitle' className='subTitle'>
                                <div className='optionDate'>{classInfo.topicTitle1_date1}</div>
                                <div className='optionTitle'>{classInfo.topicTitle1_title1}</div>
                            </div>
                            <div id='liveTopicTitle' className='subTitle'>
                                <div className='optionDate'>{classInfo.topicTitle1_date2}</div>
                                <div className='optionTitle'>{classInfo.topicTitle1_title2}</div>
                            </div>
                            
                            {/* Even Numbered Topic */}
                            <div id='evenTopicNumber' className='headerTitle' onClick={() => toggleDetails(index + 0.1)}>
                                <img 
                                    src={playButton2} 
                                    className={`scheduleIconImg ${expandedSections[index + 0.1] ? 'rotated' : ''}`} 
                                    alt='playButton2' 
                                />
                                <div className='classTitle'>{classInfo.topicTitle2} ·&nbsp;</div>
                                <div className='clickDetails'>Click for Details</div>
                            </div>
                            {/* Conditionally render topicDetails based on expandedSections */}
                            {expandedSections[index + 0.1] && (
                                <>
                                    <div className='topicDetails'>
                                        <ul>{classInfo.topicDetails2_1}</ul>
                                        <ul>{classInfo.topicDetails2_2}</ul>
                                        <ul>{classInfo.topicDetails2_3}</ul>
                                        <li>{classInfo.topicDetails2_bullet1}</li>
                                        <li>{classInfo.topicDetails2_bullet2}</li>
                                        <li>{classInfo.topicDetails2_bullet3}</li>
                                    </div>
                                </>
                            )}

                            <div id='optionalTitle' className='subTitle'>
                                <div className='optionDate'>{classInfo.topicTitle2_date1}</div>
                                <div className='optionTitle'>{classInfo.topicTitle2_title1}</div>
                            </div>
                            <div id='liveTopicTitle' className='subTitle'>
                                <div className='optionDate'>{classInfo.topicTitle2_date2}</div>
                                <div className='optionTitle'>{classInfo.topicTitle2_title2}</div>
                            </div>

                        </div>
                    </div>
                </div>
              );
          })}
        </div>
    );
}