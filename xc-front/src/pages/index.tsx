import axios from 'axios';

export default function MyComponent({ data }) {
    console.log(data.code);
    console.log(data.message);
    return (
        <div>
            {data.code}
            <br/>
            <h1>{data.message}</h1>
            <h1>{data.welcomemsg}</h1>
        </div>
    );
}

export async function getServerSideProps() {
    const apiInstance = axios.create({
        baseURL: 'http://127.0.0.1:8080',
        timeout: 1000,
        headers: { "content-Type": "application/json" }
    })

    try {
        const response = await apiInstance.get('/api');
        return {
            props: {
                data: response.data.msg, // APIから受け取ったデータをpropsとして渡す
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                data: 'Error fetching data', // データの取得に失敗した場合に表示するデフォルトのテキスト
            },
        };
    }
}
