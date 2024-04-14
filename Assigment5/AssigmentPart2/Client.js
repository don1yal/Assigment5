class Data {
    constructor (type, content) {
        this.type = type;
        this.content = content;
    }
}

class DataProcessor {
    createDataProcessor(data){

    }
}

class TextDataProcessor extends DataProcessor {
    createDataProcessor(data) {
        console.log("Processing text data: ", data.content.text);
    }
}

class AudioDataProccessor extends DataProcessor {
  createDataProcessor(data) {
        if (data.content instanceof AudioContent) {
            console.log("Processing audio data");
            console.log("Audio buffer:", data.content.audioBuffer);
        } else {
            throw new Error("Invalid content type for audio data.");
        }
    }
}
class VideoDataProcessor extends DataProcessor {
     createDataProcessor(data) {
        if (data.content instanceof VideoContent) {
            console.log("Processing video data");
            console.log("Video buffer:", data.content.videoBuffer);
        } else {
            throw new Error("Invalid content type for video data.");
        }
    }
}

class TextContent {
    constructor(text) {
        this.text = text;
    }
}

class AudioContent {
    constructor(audioBuffer) {
        this.audioBuffer = audioBuffer;
    }
}

class VideoContent {
    constructor(videoBuffer) {
        this.videoBuffer = videoBuffer;
    }
}

class DataProcessorCreator {

    constructor() {
        this.processor = null;
    }
    
    setProcessor(processor) {
        this.processor = processor;
    }

    processData(data) {
        if (this.processor == null) {
            throw new Error("Processor not set");
        }
        this.processor.createDataProcessor(data);
    }
}


const processorCreator = new DataProcessorCreator();

const textData = new Data("text", new TextContent("Hello, world!"));
processorCreator.setProcessor(new TextDataProcessor());
processorCreator.processData(textData);

const audioData = new Data("audio", new AudioContent(new Uint8Array([1, 2, 3, 4, 5])));
processorCreator.setProcessor(new AudioDataProccessor());
processorCreator.processData(audioData);

const videoData = new Data("video", new VideoContent(new Uint8Array([10, 20, 30, 40, 50])));
processorCreator.setProcessor(new VideoDataProcessor());
processorCreator.processData(videoData);
