import mongoose from 'mongoose';
const {Schema} = mongoose

const VotedCandidateModel = new Schema({
        orgId: {type: String},
        votersId:{type: String},
        President: {type: String},
        Financial: {type: String},
        Wocom: {type: String},
        Organizer: {type: String},
        Treasure: {type: String},
        Secretary: {type: String},
        voted: {type: Boolean}

})


export default mongoose.model('VotedCandidate', VotedCandidateModel)