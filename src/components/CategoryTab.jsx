import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SportsCar from './SportsCar';
import MiniFireTruck from './MiniFireTruck';
import MiniPoliceCar from './MiniPoliceCar';
import AllCar from './AllCar';

const CategoryTab = () => (
  <div className='container mx-auto pb-28'>
    <h1 className="text-6xl font-bold text-[#ffc800] text-center my-28">Shop by category</h1>
    <Tabs>
      <TabList>
        <Tab><button className="bg-[#ffc800] hover:bg-[#8b6b05] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          All Car
        </button>
        </Tab>
        <Tab><button className="bg-[#ffc800] hover:bg-[#8b6b05] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sports Car
        </button>
        </Tab>
        <Tab><button className="bg-[#ffc800] hover:bg-[#8b6b05] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Mini Fire Truck
        </button>
        </Tab>
        <Tab><button className="bg-[#ffc800] hover:bg-[#8b6b05] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Mini Police Car
        </button>
        </Tab>
      </TabList>

      <TabPanel>
        <AllCar />
      </TabPanel>
      <TabPanel>
        <SportsCar />
      </TabPanel>
      <TabPanel>
        <MiniFireTruck />
      </TabPanel>
      <TabPanel>
        <MiniPoliceCar />
      </TabPanel>
    </Tabs>
  </div>
);

export default CategoryTab