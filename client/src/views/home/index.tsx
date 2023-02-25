import LeftNavDrawer from "../../components/leftNavDrawer"
import "./style.css"
import NewScraper from "./newScraper";
import UpdateScraper from "./updateScraper";
import RunScraper from "./runScraper";
import { Route, Routes } from "react-router-dom";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import TuneIcon from '@mui/icons-material/Tune';
import AddBoxIcon from '@mui/icons-material/AddBox';
export default function HomeView() {

    return <div style={{ flexGrow: 1 }}>
        <LeftNavDrawer elements={[{
            label: "New Scraper",
            href: "/home/new-scraper",
            Icon: AddBoxIcon
        }, {
            label: "Update Scraper",
            href: "/home/update-scraper",
            Icon: TuneIcon
        }, {
            label: "Run Scraper",
            href: "/home/run-scraper",
            Icon: PlayCircleFilledIcon
        }]} />
        <Routes>
            <Route index element={<></>} />
            <Route path="/new-scraper" element={<NewScraper />} />
            <Route path="/update-scraper" element={<UpdateScraper />} />
            <Route path="/run-scraper" element={<RunScraper />} />
            <Route path="*" element={<>404 - Page not found</>} />
        </Routes>
    </div>
}