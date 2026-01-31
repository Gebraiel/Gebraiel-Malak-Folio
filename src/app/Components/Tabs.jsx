import React, { useContext } from 'react'
import ExperienceTab from './ExperienceTab';
import EducationTab from './EducationTab';
import SkillsTab from './SkillsTab';
import { TabsContext } from '../Context/TabsContext';
const tabs=[<ExperienceTab/>,<EducationTab/>,<SkillsTab/>]
export default function Tabs() {
    const {activeTab} = useContext(TabsContext);
    return (
        <div>   
                {tabs[activeTab]}
        </div>
    )
}
