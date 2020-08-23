import axios from 'axios'
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default function asyncRequest(endPoint: string): Promise<object> {
    return new Promise<object>((resolve: (value?: object) => any, reject: (reason?: any) => any) => {
        axios
            .get(endPoint, {})
            .then((res: object): Promise<object> => resolve(res))
            .catch((err: any): any => reject(err))
    })
}
