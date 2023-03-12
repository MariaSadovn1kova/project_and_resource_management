import Navbar from "@/components/UI/menu/Navbar"
import Sidebar from "@/components/UI/menu/Sidebar"
import LocalNavbar from "@/components/UI/menu/LocalNavbar"
import ProjectItem from "@/components/UI/projects/ProjectItem"
import ProjectList from "@/components/UI/projects/ProjectList"
import CustomButton from "@/components/UI/buttons/CustomButton"
import DownloadButton from "@/components/UI/buttons/DownloadButton"
import ClientForm from "@/components/UI/create_project/ClientForm"
import CustomInput from "@/components/UI/input/CustomInput"
import CustomTextarea from "@/components/UI/input/CustomTextarea"
import BuildingForm from "@/components/UI/create_project/BuildingForm"
import GeneralInfo from "@/components/UI/create_project/building/GeneralInfo"
import FoundationInfo from "@/components/UI/create_project/building/FoundationInfo"
import WallsInfo from "@/components/UI/create_project/building/WallsInfo"
import OverlapInfo from "@/components/UI/create_project/building/OverlapInfo"
import RoofInfo from "@/components/UI/create_project/building/RoofInfo"
import Estimate from "@/components/UI/create_project/estimate/Estimate"
import CustomSubButton from "@/components/UI/buttons/CustomSubButton"
import EstimateDialog from "@/components/UI/create_project/estimate/EstimateDialog"

export default [
    Navbar,
    Sidebar,
    CustomButton,
    LocalNavbar,
    ProjectItem,
    ProjectList,
    DownloadButton,
    ClientForm,
    CustomInput, 
    CustomTextarea,
    BuildingForm,
    GeneralInfo,
    FoundationInfo,
    WallsInfo,
    OverlapInfo,
    RoofInfo,
    Estimate,
    CustomSubButton,
    EstimateDialog
]