import React from 'react'
import StickyHeader from '../../components/sticky-header'
import Tab from '../../components/tab/index'
import ForYou from './for-you'

const Home = () => {
    return (
        <div>
            <Tab activeTab="for-you">
                <StickyHeader title="Anasayfa">
                    <Tab.Items>
                        <Tab.Item id="for-you">
                            Sana özel
                        </Tab.Item>
                        <Tab.Item id="followings">
                            Takip edilenler
                        </Tab.Item>
                    </Tab.Items>
                </StickyHeader>
                <Tab.Content id="for-you">
                    <ForYou />
                </Tab.Content>
                <Tab.Content id="followings">
                    2. content
                </Tab.Content>
            </Tab>
        </div>
    )
}

export default Home