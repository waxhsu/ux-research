import axios from "axios";

// UPDATE CALENDAR DATA HERE
// https://airtable.com/appKDcbRP09tSx7o5/tblxPgptk13IWNYbl/viwxiPaHV4QdoIHbD?blocks=hide

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const BASE_ID = process.env.REACT_APP_BASE_ID;

//// EXAMPLE ////

/// COHORT # START ///
/// COHORT # START ///
/// COHORT # START ///

// const TABLE_ID_COHORT# = process.env.REACT_APP_TABLE_ID_COHORT#;

// export const COHORT#_DATE_RANGE = [
//   {
//     start: `MONTH DAY`,
//     end: `MONTH DAY`,
//   }
// ]

// export const fetchCohort# = async () => {    <------ UPDATE
//   const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT#}`; <----- UPDATE
//   const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

//   try {
//     const response = await axios.get(url, { headers });
//     return response.data.records.map(record => ({
//       week: record.fields.Week,

//       name1: record.fields.Name1,
//       timeLecture1: record.fields.TimeLecture1,
//       timeCoaching1: record.fields.TimeCoaching1,
//       rich1: record.fields.RichText1,

//       name2: record.fields.Name2,
//       timeLecture2: record.fields.TimeLecture2,
//       timeCoaching2: record.fields.TimeCoaching2,
//       rich2: record.fields.RichText2,

//     }));
//   } catch (error) {
//     console.error('Error fetching data from Airtable', error);
//     return [];
//   }
// };

/// COHORT # END ///
/// COHORT # END ///
/// COHORT # END ///

/// COHORT 3 START ///
/// COHORT 3 START ///
/// COHORT 3 START ///

const TABLE_ID_COHORT3 = process.env.REACT_APP_TABLE_ID_COHORT3;

export const COHORT3_DATE_RANGE = [
    {
        start: `Mon ##`,
        end: `Mon ##`,
    },
];

export const fetchCohort3 = async () => {
    const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT3}`;
    const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

    try {
        const response = await axios.get(url, { headers });
        return response.data.records.map((record) => ({
            week: record.fields.Week,

            name1: record.fields.Name1,
            rich1: record.fields.RichText1,
            date1: record.fields.DateOutput1,

            watchStart1: record.fields.WatchStart1,
            watchEnd1: record.fields.WatchEnd1,
            coachStart1: record.fields.CoachStart1,
            coachEnd1: record.fields.CoachEnd1,

            name2: record.fields.Name2,
            rich2: record.fields.RichText2,
            date2: record.fields.DateOutput2,

            watchStart2: record.fields.WatchStart2,
            watchEnd2: record.fields.WatchEnd2,
            coachStart2: record.fields.CoachStart2,
            coachEnd2: record.fields.CoachEnd2,
        }));
    } catch (error) {
        console.error("Error fetching data from Airtable", error);
        return [];
    }
};

/// COHORT 3 END ///
/// COHORT 3 END ///
/// COHORT 3 END ///

/// COHORT 2 START ///
/// COHORT 2 START ///
/// COHORT 2 START ///

const TABLE_ID_COHORT2 = process.env.REACT_APP_TABLE_ID_COHORT2;

export const COHORT2_DATE_RANGE = [
    {
        start: `Mon ##`,
        end: `lol`,
    },
];

export const fetchCohort2 = async () => {
    const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT2}`;
    const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

    try {
        const response = await axios.get(url, { headers });
        return response.data.records.map((record) => ({
            week: record.fields.Week,
            start: record.fields.CohortOutput1,
            end: record.fields.CohortOutput2,

            name1: record.fields.Name1,
            rich1: record.fields.RichText1,
            date1: record.fields.DateOutput1,

            watchStart1: record.fields.WatchStart1,
            watchEnd1: record.fields.WatchEnd1,
            coachStart1: record.fields.CoachStart1,
            coachEnd1: record.fields.CoachEnd1,

            name2: record.fields.Name2,
            rich2: record.fields.RichText2,
            date2: record.fields.DateOutput2,

            watchStart2: record.fields.WatchStart2,
            watchEnd2: record.fields.WatchEnd2,
            coachStart2: record.fields.CoachStart2,
            coachEnd2: record.fields.CoachEnd2,
        }));
    } catch (error) {
        console.error("Error fetching data from Airtable", error);
        return [];
    }
};

/// COHORT 2 END ///
/// COHORT 2 END ///
/// COHORT 2 END ///

/// COHORT 1 START ///
/// COHORT 1 START ///
/// COHORT 1 START ///

const TABLE_ID_COHORT1 = process.env.REACT_APP_TABLE_ID_COHORT1;

export const COHORT1_DATE_RANGE = [
    {
        start: `Jan 28`,
        end: `Feb 20`,
    },
];

export const fetchCohort1 = async () => {
    const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT1}`;
    const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

    try {
        const response = await axios.get(url, { headers });
        console.log(response.data.records);
        return response.data.records.map((record) => ({
            week: record.fields.Week,
            start: record.fields.CohortOutput1,
            end: record.fields.CohortOutput2,

            name1: record.fields.Name1,
            rich1: record.fields.RichText1,
            date1: record.fields.DateOutput1,

            watchStart1: record.fields.WatchStart1,
            watchEnd1: record.fields.WatchEnd1,
            coachStart1: record.fields.CoachStart1,
            coachEnd1: record.fields.CoachEnd1,

            name2: record.fields.Name2,
            rich2: record.fields.RichText2,
            date2: record.fields.DateOutput2,

            watchStart2: record.fields.WatchStart2,
            watchEnd2: record.fields.WatchEnd2,
            coachStart2: record.fields.CoachStart2,
            coachEnd2: record.fields.CoachEnd2,
        }));
    } catch (error) {
        console.error("Error fetching data from Airtable", error);
        return [];
    }
};

/// COHORT 1 END ///
/// COHORT 1 END ///
/// COHORT 1 END ///

/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///

export const formatToLocalTime = (
    dateString,
    includeTimezone = true,
    timezone = null
) => {
    if (!dateString) return "N/A";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";

    // Use the local timezone if no timezone is provided
    const localTimezone =
        timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"; // Fallback to UTC if no timezone is detected

    let formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: localTimezone, // Use local or passed timezone
        timeZoneName: includeTimezone ? "short" : undefined,
    }).format(date);

    // Remove the first space before AM/PM and make it lowercase
    formattedTime = formattedTime.replace(/ (\wM)/, (match) =>
        match.toLowerCase().trim()
    );

    // Remove minutes if they are ":00"
    formattedTime = formattedTime.replace(/(:00)/, "");

    return formattedTime;
};

export const timezones = [
    "UTC",
    "America/New_York", // EST
    "America/Los_Angeles", // PST
    "America/Chicago", // CST
    "America/Denver", // MST
    "America/Anchorage", // AKST
    "Europe/London", // GMT
    "Europe/Paris", // CET
    "Europe/Moscow", // MSK
    "Europe/Istanbul", // TRT
    "Africa/Cairo", // EET
    "Africa/Johannesburg", // SAST
    "Asia/Tokyo", // JST
    "Asia/Shanghai", // CST
    "Asia/Taipei", // HKT
    "Asia/Seoul", // KST
    "Asia/Kolkata", // IST
    "Asia/Dubai", // GST
    "Australia/Melbourne", // AEDT
    "Pacific/Auckland", // NZDT
    "Pacific/Fiji", // FJT
    "Pacific/Honolulu", // HST
];

export const timezoneDropdown = (selectedTimezone, setSelectedTimezone) => {
    return (
        <select
            value={selectedTimezone}
            onChange={(e) => setSelectedTimezone(e.target.value)}
        >
            {timezones.map((tz) => (
                <option key={tz} value={tz}>
                    {tz}
                </option>
            ))}
        </select>
    );
};

/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///
