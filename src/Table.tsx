import { CSSProperties } from "react";

interface Column {
  key: string;
  label: string;
  width?: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  height?: string;
}

const Table = ({ columns, data }: TableProps) => {
  const tableContainerStyle: CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  const tableStyle: CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const headerStyle: CSSProperties = {
    position: "sticky",
    top: 0,
    backgroundColor: "#f5f5f5",
    zIndex: 10,
    fontWeight: "bold",
    textAlign: "left",
    padding: "12px",
    borderBottom: "2px solid #ddd",
  };

  const cellStyle: CSSProperties = {
    padding: "12px",
    borderBottom: "1px solid #eee",
  };

  const rowStyle: CSSProperties = {
    transition: "background-color 0.2s",
  };

  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{
                  ...headerStyle,
                  width: column.width,
                }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              style={rowStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f9f9f9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {columns.map((column) => (
                <td key={column.key} style={cellStyle}>
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Developer",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "QA Engineer",
  },
  {
    id: 6,
    name: "Diana Davis",
    email: "diana@example.com",
    role: "Product Owner",
  },
  { id: 7, name: "Eve Martinez", email: "eve@example.com", role: "Developer" },
  { id: 8, name: "Frank Wilson", email: "frank@example.com", role: "Designer" },
  { id: 9, name: "Grace Lee", email: "grace@example.com", role: "Developer" },
  { id: 10, name: "Henry Taylor", email: "henry@example.com", role: "DevOps" },
  { id: 11, name: "Ivy Anderson", email: "ivy@example.com", role: "Developer" },
  { id: 12, name: "Jack Thomas", email: "jack@example.com", role: "Manager" },
  { id: 13, name: "Karen Moore", email: "karen@example.com", role: "Designer" },
  { id: 14, name: "Leo Jackson", email: "leo@example.com", role: "Developer" },
  { id: 15, name: "Mia White", email: "mia@example.com", role: "QA Engineer" },
];

const sampleColumns = [
  { key: "id", label: "ID", width: "80px" },
  { key: "name", label: "Name", width: "200px" },
  { key: "email", label: "Email", width: "250px" },
  { key: "role", label: "Role" },
];

export default Table;
export { sampleData, sampleColumns };
export type { Column, TableProps };

export const StickyTable = () => {
  return (
    <div>
      <Table columns={sampleColumns} data={sampleData} />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
      adipisci, asperiores, aut dicta doloribus exercitationem fugit itaque modi
      natus neque nesciunt numquam optio pariatur placeat quibusdam
      reprehenderit, saepe velit veniam. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Distinctio iure quidem similique soluta. Autem deleniti
      doloremque earum hic itaque iure magni minima nemo, nobis quaerat qui
      quod, sit ut, veritatis. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Ad aliquam debitis, delectus dolorem doloribus dolorum
      exercitationem facere in ipsa mollitia optio possimus praesentium
      quibusdam rerum totam ut velit vitae voluptate. Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Ab accusantium, assumenda atque aut
      dolorem, doloribus ducimus excepturi id, inventore itaque laboriosam nam
      perferendis repellendus tenetur vel. Ipsa sint ut voluptates. Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Delectus distinctio itaque
      odio officia ut. Aliquid autem beatae, eaque eveniet explicabo nulla
      officia rem sapiente vel, vero voluptas voluptate voluptates voluptatum.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa fuga
      harum molestiae possimus quod sapiente veritatis! Deserunt ducimus ea illo
      nesciunt non omnis quisquam ratione sapiente, similique sint vero. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa, deleniti
      dolorum et explicabo incidunt laboriosam libero magnam, nihil odit
      officiis perferendis perspiciatis quae, quaerat sunt unde vel voluptas!
      Repudiandae. lorem Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Adipisci, assumenda cumque delectus deleniti dolore eius eligendi
      hic illo illum, laborum magnam molestiae nihil non officiis quas ullam
      unde ut vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Animi architecto aut consectetur corporis dignissimos ducimus facere
      itaque iure, officia officiis omnis optio perspiciatis praesentium rem,
      repudiandae, tempore veniam voluptatem voluptatibus! Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Ad cupiditate dignissimos doloremque
      facilis impedit incidunt ipsam iusto mollitia nam nobis nostrum nulla
      possimus quasi quo sequi similique sit, veniam voluptas. Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Amet autem corporis cumque debitis
      dolores harum, ipsam iste labore, laborum mollitia nemo neque nihil quis
      soluta sunt totam veniam vero, vitae. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Amet autem corporis debitis dolore enim ex
      excepturi explicabo laborum non, nostrum perspiciatis placeat, quibusdam,
      quos tempora tempore ullam unde veniam voluptatem? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Architecto commodi cum debitis
      deserunt dicta dignissimos excepturi explicabo fugit harum id, molestias
      nam nulla numquam perferendis porro recusandae reiciendis, sapiente totam.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad architecto,
      cum deserunt dolor exercitationem, magnam odio pariatur qui quisquam
      repellat reprehenderit voluptatibus, voluptatum. Asperiores doloremque
      fugit modi nulla qui? Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Fugiat ipsam nemo reiciendis similique voluptatibus. Aperiam dicta,
      doloribus esse eveniet excepturi id ipsa necessitatibus nisi officia optio
      pariatur praesentium provident tempora? Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Accusamus amet aspernatur beatae dolor
      dolorum eaque, est excepturi explicabo ipsa laboriosam mollitia nulla
      perferendis, provident quibusdam quo, quos recusandae saepe velit! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid
      aperiam corporis dolor doloremque dolores eligendi error esse
      exercitationem hic necessitatibus nesciunt, non odio porro provident
      quisquam recusandae saepe voluptates.
    </div>
  );
};
