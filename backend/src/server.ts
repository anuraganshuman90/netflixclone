import app from "./app";
import { ContentRepository } from "./repositories/content.repository";

const PORT = 3001;

app.listen(PORT, () => {
    console.log("--------------------------------");
    console.log("Server started successfully.");
    console.log(`Listening on http://localhost:${PORT}`);
    console.log("--------------------------------");

    //console.log(ContentRepository.getAll())
});
