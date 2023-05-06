import User from "./User";
import Suggestions from "./Suggestions";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <User />
            <Suggestions />
        </div>
    );
}