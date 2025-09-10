import { useState, useEffect } from 'react';
import { DataSource } from '../types';

// BUGGY: Generic type constraints hiányoznak
export function useDataSource<T>(source: DataSource<T>) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadData = async () => {
      try {
        setLoading(true);
        const result = await source.fetch();
        
        // BUGGY: Transform függvény típusa nem megfelelő
        const transformed = source.transform 
          ? source.transform(result) 
          : result;
        
        if (!cancelled) {
          setData(transformed);
        }
      } catch (err) {
        // BUGGY: Error casting nem biztonságos
        if (!cancelled) {
          setError(err as Error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      cancelled = true;
    };
  // BUGGY: Dependency array hiányos
  }, [source.id]);

  return { data, loading, error };
}