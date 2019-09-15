export class FakeDatabaseService {
    async getItems(queryPath: string) {
        return new Promise<firebase.firestore.QuerySnapshot>((resolve, reject) => { });
    }
}
