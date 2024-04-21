/**
 * Функция для запроса данных со стороннего сервиса reqres.in
 * @param {string} page - номер страницы для запроса.
 * @return {*}  {Promise<any>}
 */
async function fetchPartnersFromPage(page: string): Promise<any> {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`)
    if (!res.ok) return undefined
    return res.json()
}

/**
 * Функция для получения готового массива объектов типа Partner из полученных данных со стороннего сервиса.
 * @param numberOfPages - количесвто запрашиваемых страниц с данными у стороннего сервиса.
 * @returns готовый массив объектов
 */
export async function getAllPartners(numberOfPages: number) {

    let requests = [];

    for (let index = 1; index <= numberOfPages; index++) {
        requests.push(fetchPartnersFromPage(index.toString()));
    }

    let partners;

    try {
        partners = await Promise.all(requests);
        const partnersArr = partners.reduce((arr, result) => {
            const data = result.data;
            return arr.concat(data);
        }, []);
        return partnersArr;
    } catch (error) {
        console.error("Ошибка при выполнении запросов: ", error)
    }
}
