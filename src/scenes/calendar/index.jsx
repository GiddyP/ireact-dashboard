import { useState } from "react";
import '@fullcalendar/react/dist/vdom'; // Add this to your imported file when working with vite 
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import './app.css';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: 'white',
    backgroundColor: '#393333',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    // zIndex: 
};

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDateClick = (selected) => {

        const title = prompt("Please enter a new title for your event");

        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };

    const BasicModal = () => {

        return (
            <div>
                <Modal
                    open={open}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" mb="15px">
                            Please enter a new title for your event
                        </Typography>
                        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography> */}
                        <form action="">

                            <textarea name="text" cols="45" rows="2"></textarea>

                            <Box
                                display={"flex"}
                                justifyContent={"flex-end"}
                                gap={"15px"}
                            >
                                <Button
                                    sx={
                                        {
                                            display: "flex",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            width: "60px",
                                            color: 'white',
                                            border: '2px solid #000',
                                        }
                                    }
                                    onClick={handleClose}>Close</Button>
                                <Button
                                    sx={
                                        {
                                            display: "flex",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            width: "60px",
                                            color: 'white',
                                            border: '2px solid #000',
                                        }
                                    }
                                    onClick={(e) => handleDateClick}>Okay</Button>
                            </Box>
                        </form>

                    </Box>
                </Modal>
            </div >
        );
    };

    return (
        <Box
            m="20px"
            sx={{
                mt: { xs: "80px", lg: "0" }
            }}
        >
            <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

            <Box
                className="calender__container"
                display="flex"
                justifyContent="space-between"
                sx={{
                    flexDirection: { xs: 'column', lg: 'row' },
                }}
            >

                {/* CALENDAR */}
                <Box
                    flex="1 1 100%"
                    ml="15px"
                    sx={{
                        marginLeft: { xs: "0", lg: "15px" },
                    }
                    }
                >
                    <FullCalendar
                        sx={{
                            zIndex: "-1",
                        }}
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}

                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "12315",
                                title: "All-day event",
                                date: "2022-09-14",
                            },
                            {
                                id: "5123",
                                title: "Timed event",
                                date: "2022-09-28",
                            },
                        ]}
                    />
                </Box>

                <BasicModal />
                {/* CALENDAR SIDEBAR */}
                <Box
                    flex="1 1 20%"
                    backgroundColor={colors.primary[400]}
                    p="15px"
                    borderRadius="4px"
                    sx={{
                        margin: { xs: "0", lg: "15px" },
                        marginTop: {md: "25px", lg: "0"}
                    }}
                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box height={'10px'}>
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;