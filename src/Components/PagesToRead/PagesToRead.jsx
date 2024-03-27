import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { getBooks } from '../../Utility';
const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`
  );
  
  const TriangleBar = (props) => {
    const {
      fill, x, y, width, height,
    } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


const PagesToRead = () => {
    const [readChart, setReadChart] = useState([]);

    useEffect(() => {
        const readBooksData = () => {
            const storedReadList = getBooks();
            setReadChart(storedReadList);
        };
        readBooksData();
    }, []);

    const chartData = readChart.map(book => ({
        name: book.bookName,
        pages: book.totalPages
    }));

    return (
        <div className="my-12">
            <div>
                <div className="mb-8">
                    <BarChart
                        width={800}
                        height={500}
                        data={chartData}

                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                        <Bar
                            dataKey="pages"
                            fill="#8884d8"
                            shape={<TriangleBar />}
                        />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};


export default PagesToRead;
