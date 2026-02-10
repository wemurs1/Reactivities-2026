import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[]
    selectActivity: (id: string) => void
    cancelSelectActivity: () => void
    selectedActivity?: Activity
    openForm: (id: string) => void
    closeForm: () => void
    editMode: boolean
    submitForm: (activity: Activity) => void
    deleteActivity: (id: string) => void
}

export default function ActivityDashboard({
    activities,
    cancelSelectActivity,
    selectActivity,
    selectedActivity,
    openForm,
    closeForm,
    editMode,
    submitForm,
    deleteActivity }: Props) {
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityList selectActivity={selectActivity} activities={activities} deleteActivity={deleteActivity}/>
            </Grid>
            <Grid size={5}>
                {selectedActivity && !editMode &&
                    <ActivityDetails cancelSelectActivity={cancelSelectActivity} activity={selectedActivity} openForm={openForm} />}
                {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity} submitForm={submitForm} />}
            </Grid>
        </Grid>
    )
}